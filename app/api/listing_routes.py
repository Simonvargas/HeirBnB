from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Listing, db
from app.forms import listing_form




listing_routes = Blueprint('listings', __name__)


@listing_routes.route('/', methods=['GET'])
def get_projects():
    listings = Listing.query.all()
    return {'Listings' : [listing.to_dict() for listing in listings]}
# 'watchs' : [watch.to_dict() for watch in watchs]

@listing_routes.route('/<int:id>', methods=['GET'])
@login_required
def one_project(id):
    listing = Listing.query.get(id)
    return listing.to_dict()



# post route
@listing_routes.route('/create', methods=['POST'])
@login_required
def create_project():
    form = listing_form.ListingForm()
    print('form data', form.data)
    
    if not form.validate_on_submit():
        listing = Listing(
            user_id = form.data['user_id'],
            title = form.data['title'],
            price = form.data['price'],
            address = form.data['address'],
            city = form.data['city'],
            state = form.data['state'],
            country = form.data['country'],
            image = form.data['image'],
            latitude = form.data['latitude'],
            longitude = form.data['longitude'],
            description = form.data['description'],
          
        )
        db.session.add(listing)
        db.session.commit()
        return listing.to_dict()
    return {'error' : 'Invalid request'}


@listing_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_project(id):
    listing = Listing.query.get(id)
    db.session.delete(listing)
    db.session.commit()
    return {}, 200


@listing_routes.route('/edit/<int:id>', methods=['PUT'])
@login_required
def update_project(id):
    res = Listing.query.get(id)
    form = listing_form.ListingForm()

    res.user_id = form.data['user_id']
    res.title = form.data['title']
    res.price = form.data['price']
    res.address = form.data['address']
    res.city = form.data['city']
    res.state = form.data['state']
    res.country = form.data['country']
    res.image = form.data['image']
    res.description = form.data['description']
    db.session.commit()
    return res.to_dict()
    # return {'error' : 'Invalid request'}


# @listing_routes.route('/editfunds/<int:id>', methods=['PUT'])
# @login_required
# def update_funding(id):
#     res = Project.query.get(id)
#     form = ProjectForm()

#     res.funding_raised = form.data['funding_raised']
#     res.backers = form.data['backers']
#     db.session.commit()
#     return res.to_dict()

