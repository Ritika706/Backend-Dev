import fs from 'fs';

export const showGallery = (req, res) => {
    const files = fs.readdirSync('./public');
    const page = parseInt(req.query.page, 10) || 1;
    const limit = 10;
    const totalPages = Math.ceil(files.length / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedFiles = files.slice(startIndex, endIndex);
    res.render('index', {
        files: paginatedFiles,
        currentPage: page,
        totalPages: totalPages
    });
};