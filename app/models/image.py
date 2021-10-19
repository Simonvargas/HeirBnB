from .db import db


class Image(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    listingId = db.Column(db.Integer, db.ForeignKey('lisiting.id'))
    url = db.Column(db.Text)
    images = db.relationship("Listings", back_populates="images")
    def to_dict(self):
        return{
            'id': self.id,
            'userId': self.userId,
            'listing': self.listingId,
            'url': self.url,
            
        }
