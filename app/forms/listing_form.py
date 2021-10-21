from flask_wtf import FlaskForm
from wtforms import StringField, validators, IntegerField, FloatField


class ListingForm(FlaskForm):
    user_id = IntegerField('user_id', [validators.DataRequired()])
    title = StringField('title', [validators.DataRequired()])
    price = IntegerField('price', [validators.DataRequired()])
    address = StringField('address', [validators.DataRequired()])
    city = StringField('city', [validators.DataRequired()])
    state = StringField('state', [ validators.DataRequired()])
    country = StringField('country', [validators.DataRequired()])
    image = StringField('image', [validators.DataRequired()])
    latitude = FloatField('latitude')
    longitude = FloatField('longitude')
    description = StringField('description', [validators.DataRequired()])