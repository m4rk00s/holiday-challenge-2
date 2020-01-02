module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Contact extends Model {}

  Contact.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      phone: DataTypes.STRING
    },
    { sequelize }
  );

  Contact.associate = models => {};

  return Contact;
};
