const Brand = require("./../db/brand");

// Retrieve all brands
async function getBrands() {
    let brands = await Brand.find();
    return brands.map((x) => x.toObject());
}

// Retrieve a single brand by ID
async function getBrand(id) {
    let brand = await Brand.findById(id);
    if (!brand) {
        throw new Error('Brand not found');
    }
    return brand.toObject();
}

// Add a new brand
async function addBrand(model) {
    let brand = new Brand({
        name: model.name
    });
    await brand.save();
    return brand.toObject();
}

// Update a brand
async function updateBrand(id, model) {
    let updatedBrand = await Brand.findByIdAndUpdate(id, model, { new: true });
    if (!updatedBrand) {
        throw new Error('Brand not found');
    }
    return updatedBrand.toObject();
}

// Delete a brand
async function deleteBrand(id) {
    let deletedBrand = await Brand.findByIdAndDelete(id);
    if (!deletedBrand) {
        throw new Error('Brand not found');
    }
    return deletedBrand.toObject();
}

module.exports = { getBrands, getBrand, addBrand, updateBrand, deleteBrand };
