from sqlalchemy.orm import backref
from .db import db


class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    listingId = db.Column(db.Integer, db.ForeignKey('listings.id'))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    startTime = db.Column(db.Date)
    endTime = db.Column(db.Date)

    associatedListing = db.relationship('Listing', backref='books')
    
    def to_dict(self):
        
        return {
            'id': self.id,
            'listingId': self.listingId,
            'userId': self.userId,
            'startTime': self.startTime,
            'endTime': self.endTime,
            'title': self.associatedListing.title,
            'city': self.associatedListing.city,
            'state': self.associatedListing.state,
            'country': self.associatedListing.country,
            'price': self.associatedListing.price,
            'address': self.associatedListing.address,
            
        }
