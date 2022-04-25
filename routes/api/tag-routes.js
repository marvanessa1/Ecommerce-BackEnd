const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag
        }
      ],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag
        }
      ]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  /* req.body should look like this...
  {
    tag_name: "rock music",
    productIds: [1, 2, 3,]
  }
*/
  try {
    const tagData = await Tag.create(req.body);
    if (req.body.productIds.length) {
      const productProductIdArr = req.body.tagIds.map((product_id) => {
        return {
          product_id,
          tag_id: tagData.id,
        };
      });
      await ProductTag.bulkCreate(productProductIdArr);
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: Category,
      //   },
      //   {
      //     model: Tag,
      //     through: ProductTag
      //   },
      // ],
    });

    if (!tag) {
      res.status(404).json({ message: 'No product found with this id!' });
      return;
    }

    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })

    const productTags = await ProductTag.findAll({
      where: {
        tag_id: req.params.id,
      }
    })

    const productTagIds = productTags.map(({ product_id }) => product_id);

    const newProductTags = req.body.productIds
      .filter((product_id) => !productTagIds.includes(product_id))
      .map((product_id) => {
        return {
          product_id,
          tag_id: req.params.id,
        };
      });

    // figure out which ones to remove
    const productTagsToRemove = productTags
      .filter(({ product_id }) => !req.body.productIds.includes(product_id))
      .map(({ id }) => id);

    // run both actions
    Promise.all([
      ProductTag.destroy({ where: { id: productTagsToRemove } }),
      ProductTag.bulkCreate(newProductTags),
    ]);

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
