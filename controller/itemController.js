
//Import Item from module
import Item from '../models/itemSchema.js';

//Get all items
async function getAllItems(req, res) {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        winston.error(`Error retrieving items: ${err}`);
        res.status(500).json({ error: 'Error to retrieve items' });
    }
}

//Get item by ID
async function getItemById(req, res) {
    const { id } = req.params.id;
    try {
        const item = await Item.findById(id)
        if (!item) {
            return res.status(404).json({ error: "Item not found" });
        }
        res.json(item);
    } catch (err) {
        winston.error(`Error retrieving items: ${err}`);
        res.status(500).json({ error: 'Error to retrieve items' });
    }
}

//Create Item
async function createItem(req, res) {
    try {
        const item = new Item(req.body);
        const saveData = await item.save();
        res.status(201).json(saveData);
    } catch (err) {
        winston.error(`Error creating item: ${err}`);
        res.status(500).json({ error: 'Error to create item' });
    }
}

//Update item by ID
async function updateItemById(req, res) {
    const { id } = req.params.id;
    try {
        const item = await Item.findByIdAndUpdate(id, req.body, { new: true });
        if (!item) {
            return res.status(404).json({ error: "Itm not found" });
        }
        res.json(item);
    } catch (err) {
        winston.error(`Error updating item: ${err}`);
        res.status(500).json({ error: 'Error to update item' });
    }
}

//Delte item by ID
async function deleteItemById(req, res) {
    const { id } = req.params.id;
    try {
        const item = await Item.findByIdAndDelete(id);
        if (!item) {
            return res.status(404).json({ error: "Error to Delete Item item not found" })
        }
        res.status(204);
    } catch (err) {
        winston.error(`Error deleting item: ${err}`);
        res.status(500).json({ error: 'Error to delete item' });
    }
}

export default { getAllItems, getItemById, createItem, updateItemById, deleteItemById };