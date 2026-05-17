const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const protect = require("../auth/middleware/authMiddleware");

const {
    uploadFile,
    getFiles,
    downloadFile
} = require("../controllers/fileController");

router.post(
    "/upload",
    protect,
    upload.single("file"),
    uploadFile
);

router.get(
    "/",
    protect,
    getFiles
);

router.get(
    "/download/:filename",
    protect,
    downloadFile
);

module.exports = router;