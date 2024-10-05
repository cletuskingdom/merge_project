# Merge It - Simple File Merger

## Overview
This program merges the contents of two files (`baseFile.txt` and `modifiedFile.txt`) by following some simple rules. It combines parts from both files and saves the result in a new file (`mergedFile.txt`).

## How It Works
1. **Reads the files**: It reads the contents of the two files you want to merge.
2. **Splits the content into blocks**: It divides the file contents into "blocks" using a separator you choose (like `'===='` or two newlines `'\n\n'`).
3. **Merges the blocks**:
   - If a block in the modified file contains the word `"IGNORED"`, we keep the block from the original (base) file.
   - Otherwise, we use the block from the modified file.
4. **Saves the result**: After merging, it combines the blocks back together and writes the result into a new file.

## Tools Used
- **Node.js**: The program is written in Node.js, a popular tool for building applications in JavaScript.
- **fs.promises**: This is used to read and write files asynchronously (without stopping the program from doing other tasks).

## Performance
The program reads, splits, and merges the files quickly, even for larger files. Since it processes the files block by block, it can handle typical file sizes without much delay. The only limit might come if the files are extremely large, in which case it may take a bit longer.

## Assumptions
1. **Block separator**: You provide a separator to define what separates the blocks in your files. Common separators might be two newlines (`'\n\n'`) or a specific string (like `'===='`).
2. **Same number of blocks**: We assume that the base file and the modified file have roughly the same number of blocks. If the modified file has fewer blocks, we assume the missing ones are empty.
3. **"IGNORED"**: The program looks for the exact word `"IGNORED"` in the modified file. If found, the block from the base file is used.


## Running the Program
1. **Install Node.js**: Make sure Node.js is installed on your computer.
2. **Save your files**: Place `baseFile.txt` and `modifiedFile.txt` in the same folder as this program.
3. **Run the code**: Use this command in the terminal to run the program:
```bash
node merge.js
