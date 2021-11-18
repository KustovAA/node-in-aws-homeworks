import csv from 'csvtojson'
import { createReadStream, createWriteStream } from 'fs';

const [,,filePath, outputFilePath] = process.argv

const DB = {
    addRow: (row: Record<string, string>) => new Promise((r) => setTimeout(() => r(row), 200))
}

const output = createWriteStream(outputFilePath)

void csv()
    .fromStream(createReadStream(filePath))
    .subscribe((item: Record<string, string>) => {
        void DB.addRow(item)
        output.write(
            JSON.stringify(item) + '\n'
        )
    })
    .on('error', (e) => {
        console.error(e.message)
    })
