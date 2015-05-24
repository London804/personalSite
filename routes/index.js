exports.index = function(req, res) {
    res.render('default', {
        title: 'Alex Chaparro',
        classname: 'home'
    });
};

exports.portfolio =  function(req, res) {
    res.send('@London804');
    res.render('portfolio', {
        title: 'Alex Chaparro',
        classname: 'portfolio'
    });
};
