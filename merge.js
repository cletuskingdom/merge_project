const fs = require('fs').promises;

async function mergeContents(baseFilePath, modifiedFilePath, outputFilePath, blockSeparator) {
    try {
        // Step 1: Read the contents of both files
        const baseFileContents = await fs.readFile(baseFilePath, 'utf-8');
        const modifiedFileContents = await fs.readFile(modifiedFilePath, 'utf-8');
        
        // Step 2: Split the file contents into blocks using the custom block separator
        const baseBlocks = baseFileContents.split(blockSeparator);
        const modifiedBlocks = modifiedFileContents.split(blockSeparator);
        
        let mergedBlocks = [];

        // Step 3: Compare the blocks and apply the merge rules
        for (let i = 0; i < baseBlocks.length; i++) {
        const baseBlock = baseBlocks[i];
        const modifiedBlock = modifiedBlocks[i] || ''; // Handle cases where modified content is shorter

        // Apply the rule: If "IGNORED", use base block; otherwise, use modified block
        if (modifiedBlock.trim() === 'IGNORED') {
            mergedBlocks.push(baseBlock); // Use base block if modified block is "IGNORED"
        } else {
            mergedBlocks.push(modifiedBlock); // Otherwise, use the modified block
        }
        }

        // Step 4: Join the blocks back together using the custom block separator and write to the output file
        const mergedFileContents = mergedBlocks.join(blockSeparator);
        await fs.writeFile(outputFilePath, mergedFileContents, 'utf-8');

        console.log(`Merged content written to: ${outputFilePath}`);
    } catch (error) {
        console.error('Error merging files:', error);
    }
}

// Example usage: Merge two files with custom block separator and write the result to a new file
(async () => {
    const baseFilePath = './baseFile.txt';
    const modifiedFilePath = './modifiedFile.txt';
    const outputFilePath = './mergedFile.txt';

    // Specify the custom block separator (e.g., '====' or '\n\n' or anything else)
    const blockSeparator = '===='; // You can change this to '\n\n', '---', etc.

    await mergeContents(baseFilePath, modifiedFilePath, outputFilePath, blockSeparator);
})();
