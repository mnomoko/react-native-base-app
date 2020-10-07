const Datastore = require('react-native-local-mongodb')
  , db = new Datastore({ filename: 'asyncStorageKey', autoload: true });

const insertOne = async data => {
  await db.insert(data, async (err, newDoc) => {
    await newDoc;
  });
};

const updateOne = async (id, data) => {
  await db.update({ _id: id }, data, {}, async (err, numReplaced) => {
    return numReplaced;
  });
}

const removeOne = async id => {
  await db.remove({ _id: id }, {}, async (err, numRemoved) => {
    return numRemoved;
  });
};

const getAll = async () => {
  return new Promise((resolve, reject) => {
    db.find({}, async (err, docs) => {
      if(err) reject(err);

      const datas = await docs;
      resolve(datas);
    });
  });
};

const getAllByType = async type => {
  return new Promise((resolve, reject) => {
    db.find({ type }, async (err, docs) => {
      if(err) reject(err);

      const datas = await docs;
      resolve(datas);
    });
  });
};

export { insertOne, updateOne, removeOne, getAll };
