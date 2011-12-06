
  Metro.Model.Validator.Format = (function() {

    function Format(value, attributes) {
      Format.__super__.constructor.call(this, value, attributes);
      this.value = typeof value === 'string' ? new RegExp(value) : value;
    }

    Format.prototype.validate = function(record, attribute, errors) {
      var value;
      value = record[attribute];
      if (!this.value.exec(value)) {
        errors.push({
          attribute: attribute,
          message: Metro.t("model.errors.format", {
            attribute: attribute,
            value: this.value.toString()
          })
        });
        return false;
      }
      return true;
    };

    return Format;

  })();

  module.exports = Metro.Model.Validator.Format;