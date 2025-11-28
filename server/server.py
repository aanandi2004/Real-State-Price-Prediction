from flask import Flask, request, jsonify
from flask_cors import CORS
from . import util

app = Flask(__name__)
CORS(app)

# Load model + artifacts once on startup
util.load_saved_artifacts()


# ---------------- ROOT ROUTE (STOPS 404 ON HOMEPAGE) ----------------
@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "status": "running",
        "message": "Real Estate Price Prediction API is live"
    })


# ---------------- GET LOCATIONS ----------------
@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    locations = util.get_location_names()
    return jsonify({
        'locations': locations
    })


# ---------------- PREDICT PRICE ----------------
@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():

    # Accept BOTH form-data and raw JSON
    if request.is_json:
        data = request.get_json()
    else:
        data = request.form

    try:
        total_sqft = float(data.get('total_sqft'))
        location = data.get('location')
        bhk = int(data.get('bhk'))
        bath = int(data.get('bath'))
    except Exception as e:
        return jsonify({
            "error": "Invalid input data",
            "details": str(e)
        }), 400

    if not location:
        return jsonify({
            "error": "Location is required"
        }), 400

    estimated_price = util.get_estimated_price(
        location,
        total_sqft,
        bhk,
        bath
    )

    return jsonify({
        'estimated_price': estimated_price
    })


# ---------------- HEALTH CHECK ----------------
@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "OK"})
