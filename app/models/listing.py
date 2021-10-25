from .db import db

class Listing(db.Model):
    __tablename__ = 'listings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    title = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(25), nullable=False)
    state = db.Column(db.String, nullable=False)
    country = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    latitude = db.Column(db.Float, nullable=True)
    longitude = db.Column(db.Float, nullable=True)
    description = db.Column(db.String, nullable=False)
   
    lists = db.relationship('Booking', backref='lists', cascade="all, delete")


    # users = db.relationship("User", backref="listings")
    # images = db.relationship("Image", back_populates="listings")

    def to_dict(self):
        return{
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'price': self.price,
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'country': self.country,
            'image' : self.image,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'description': self.description,
            

        }
