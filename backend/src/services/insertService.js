const db = require("../models");

import { v4 } from "uuid";
require("dotenv").config();

const aobalo = require("../data/aobalo.json");
const aopolo = require("../data/aopolo.json");
const aosomi = require("../data/aosomi.json");
const aothun = require("../data/aothun.json");
const aokhoac = require("../data/aokhoac.json");
const aohoodie = require("../data/aohoodie.json");
const giaydep = require("../data/giaydep.json");
const non = require("../data/non.json");
const matkinh = require("../data/matkinh.json");
const insert = () => {
  return new Promise(async (resolve, reject) => {
    try {
      matkinh?.body.forEach(async (item) => {
        let productId = v4();

        await db.Product.create({
          id: productId,
          name: item?.title,
          description: item?.title,
          price: 99000,
          quantity: 0,
          code: item?.overview?.code,
          label: item?.description?.label,
          fabric: item?.description?.fabric,
          form: item?.description?.form,
          banner: item?.images[0],
          tag: "Trending",
          idCategoryProduct: 9,
        });

        await item?.images?.forEach(async (itemImg) => {
          let productImageId = v4();
          await db.ProductImage.create({
            id: productImageId,
            urlImage: itemImg,
            idProduct: productId,
          });
        });

        await item?.colors?.forEach(async (itemColor) => {
          await item?.sizes?.forEach(async (itemSize) => {
            let productDetailId = v4();
            await db.ProductDetail.create({
              id: productDetailId,
              quantity: 50,
              color: itemColor,
              size: itemSize,
              idProduct: productId,
            });
          });
        });
      });
      resolve("Done");
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  insert,
};
