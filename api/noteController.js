const Note = require('./noteModel');
const _ = require('lodash');

exports.params = (req, res, next, id) => {
    Note.findById(id)
        .then((note) => {
            if(!note) {
                next(new Error('Note not found'));
            } else {
                req.note = note;
                next();
            }
        }, (err) => {
            next(err);
        });
};

exports.get = (req, res, next) => {
    res.json(req.note);
};

exports.getAll = (req,res, next) => {
    Note.find({})
        .then((notes) => {
            res.json(notes);
        }, (err) => {
            next(err);
        });
};

exports.post = (req, res, next) => {
    Note.create(req.body)
        .then((note) => {
            res.json(note);
        }, (err) => {
            next(err);
        });
};

exports.put = (req, res, next) => {
    let note = new Note(req.note);
    _.merge(note, req.body);

    note.save((err, saved) => {
        if(err) {
            next(err);
        } else {
            res.json(saved);
        }
    });
};

exports.delete = (req, res, next) => {
    let note = new Note(req.note);

    note.remove((err, removed) => {
        if(err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};