from flask_wtf import FlaskForm
from wtforms import StringField, validators, IntegerField, FloatField, DateField


class BookingForm(FlaskForm):
    listingId = IntegerField('listingId', [validators.DataRequired()])
    userId= StringField('userId', [validators.DataRequired()])
    startTime= DateField('startTime', [validators.DataRequired()])
    endTime = DateField('endTime', [validators.DataRequired()])
    