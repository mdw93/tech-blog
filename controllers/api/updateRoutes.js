const router = require('express').Router();
const { Blog } = require('../../models');

/*
router.get('/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
      });
      const blog = blogData.get({ plain: true });
      });
*/



      router.get('/:id', async (req, res) => {
        try {
          const blogData = await Blog.findByPk(req.params.id, {
          });
          const blogs = blogData.get({ plain: true });
          console.log(blogs)
          res.render('update', { 
            blogs, 
            logged_in: req.session.logged_in 
          });
        } catch (err) {
          res.status(500).json(err);
        }
      }); 
      
      
      router.put('/:id', async (req, res) => {
        try {
          const blogData = await Blog.update(req.body, {
            where: {
              id: req.params.id,
            },
          });
          if (!blogData[0]) {
            res.status(404).json({ message: 'No blog with this id!' });
            return;
          }
          res.status(200).json(blogData);
        } catch (err) {
          res.status(500).json(err);
        }
      });

      module.exports = router;