from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Booking, db
from app.forms import booking_form

booking_routes = Blueprint('bookings', __name__)


@booking_routes.route('/create', methods=['POST'])
@login_required
def create_project():
    form = booking_form.BookingForm()
    print('form data', form.data)
    
    if not form.validate_on_submit():
        booking = Booking(
            listingId = form.data['listingId'],
            userId = form.data['userId'],
            startTime = form.data['startTime'],
            endTime = form.data['endTime'],
          
        )
        db.session.add(booking)
        db.session.commit()
        return booking.to_dict()
    return {'error' : 'Invalid request'}