// import des modules
const multer = require('multer');

/**
 * @constant {MIME_TYPES} / Type de fichier autorisés
 * @param {destination} / Callback du dossier de stockage
 * @param {filename} / Callback du nom du fichier et de son extension
 */

// Définition des formats d'images
const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};


// Définition de la route de stockage
const storage = multer.diskStorage({
                                       destination: (req, file, callback) => {
                                           callback(null, 'images');
                                       },
                                       filename: (req, file, callback) => {
                                           const name = file.originalname.split(' ').join('_');
                                           const extension = MIME_TYPES[file.mimetype];
                                           callback(null, name + Date.now() + '.' + extension);
                                       }
                                   });


// Export de la config de multer
module.exports = multer({storage: storage}).single('image');