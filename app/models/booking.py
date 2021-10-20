from .db import db


class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    listingId = db.Column(db.Integer, db.ForeignKey('lisiting.id'))
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    startTime = db.Column(db.Date)
    endTime = db.Column(db.Date)

    user = db.relationship("User", back_populates="userId")
    images = db.relationship("Listing", back_populates="listings")

    def to_dict(self):
        return{
            'id': self.id,
            'listingId': self.listingId,
            'userId': self.userId,
            'startTime': self.startTime,
            'endTime': self.endTime,
            
        }
