async function main() {
    const Genesys = await ethers.getContractFactory("Genesys");

    const gene_sys = await Genesys.deploy("Welcome To Genesys!");
    console.log("Contract deployed to address: ", gene_sys.address);
    
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
