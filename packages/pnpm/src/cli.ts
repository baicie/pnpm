import cac from 'cac'

const cli = cac('bnpm')

cli
  .command('install [...packages]', '安装依赖')
  .alias('i')
  .option('-w', '')
  .option('-d', '')
  .action((packages: string[], options) => {
    console.log('install', packages)
  })

cli.help()

cli.parse()
