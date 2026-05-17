const File = require("../models/file");
const path = require("path");

const uploadFile = async (req, res) => {
    try {

        const newFile = new File({
            filename: req.file.filename,
            path: req.file.path,
            user: req.user.id
        });

        await newFile.save();

        res.status(200).json({
            message: "File Uploaded Successfully",
            file: newFile
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const getFiles = async (req, res) => {
    try {

        const files = await File.find({
            user: req.user.id
        });

        res.status(200).json(files);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

const downloadFile = async (req, res) => {
    try {

        const file = await File.findOne({
            filename: req.params.filename,
            user: req.user.id
        });

        if (!file) {
            return res.status(404).json({
                message: "File not found"
            });
        }

        const filePath = path.join(__dirname, "../", file.path);

        res.download(filePath);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    uploadFile,
    getFiles,
    downloadFile
};