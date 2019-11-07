const pkg = require('../package.json')
const fs = require('fs')
const path = require('path')
const ora = require('ora')
const chalk = require('chalk')
const mkdirp = require('mkdirp')
const globby = require('globby')
const archiver = require('archiver')
const clear = require('clear')

const now = ((time) => ({
  yyyy: time.getFullYear().toString(),
  mm: (time.getMonth() + 1).toString().padStart(2, '0'),
  dd: time.getDate().toString().padStart(2, '0'),
  hh: time.getHours().toString().padStart(2, '0'),
  ii: time.getMinutes().toString().padStart(2, '0'),
  ss: time.getSeconds().toString().padStart(2, '0')
}))(new Date())

const BACKUP_VERSION = `${now.yyyy.substr(1)}.${now.mm}${now.dd}.${now.hh}${now.ii}.${now.ss}s`

const BACKUP_FILE = `../backup/${pkg.name}.${BACKUP_VERSION}.zip`

const PROJECT_ROOT = path.resolve(__dirname, './')

let patterns = [
  '**',
  '.*{rc,ignore,js,json,config}',
  '!**/_*/**',
  '!backup/**',
  '!node_modules/**',
  '!bower_components/**'
]

const spinner = ora()
spinner.start('Backup processing...')

// make sure path is exist
mkdirp.sync(path.dirname(path.join(PROJECT_ROOT, BACKUP_FILE)))

// create output stream
const output = fs.createWriteStream(path.join(PROJECT_ROOT, BACKUP_FILE))

// create archiver instance
const archive = archiver('zip', {
  zlib: {
    level: 9
  }
})

// listen for all archive data to be written
// 'close' event is fired only when a file descriptor is involved
output.on('close', function () {
  spinner.stop()
  clear()
  console.log(chalk.bgBlue(` ${BACKUP_FILE} `) + chalk.bgMagenta(` ${(archive.pointer() / 1024).toFixed(2)} KB `))
  console.log(chalk.magenta('Backup completed.'))
})

// This event is fired when the data source is drained no matter what was the data source.
// It is not part of this library but rather from the NodeJS Stream API.
// @see: https://nodejs.org/api/stream.html#stream_event_end
output.on('end', function () {
  // console.log('Data has been drained')
})

// archiver entry event
archive.on('entry', function (file) {
  console.log(chalk.magenta(file.name))
  spinner.succeed(file.name)
})

// good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function (err) {
  if (err.code === 'ENOENT') {
    // log warning
    spinner.warn(err.message)
  } else {
    // throw error
    throw err
  }
})

// good practice to catch this error explicitly
archive.on('error', function (err) {
  spinner.warn(err.message)
  spinner.stop()
  throw err
})

archive.pipe(output)

// Read project file patterns by globby
globby(patterns)
  .then(files => {
    // console.log(files)
    files.forEach(file => {
      archive.file(file, {
        cwd: PROJECT_ROOT,
        prefix: pkg.name
      })
    })
    archive.finalize()
  })
  .catch(err => {
    spinner.warn(err)
    spinner.stop()
  })
