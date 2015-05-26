exports.index = function(req, res) {
    res.render('index', {
        title: 'Alex Chaparro',
        classname: 'home'
    });
};

exports.portfolio =  function(req, res) {
    res.render('portfolio', {
        title: 'Alex Chaparro',
        classname: 'portfolio'
    });
};
