module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        description: String,
        release: Date,
        published: Boolean
      },
      { timestamps: true }
    );
     // transform toJSON
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    
    const Game = mongoose.model("game", schema);
    return Game;
  };