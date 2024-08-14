from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/')
def index():
    return "Welcome to the Flask API"
    
# @app.route('/pay', methods=['POST'])
# def pay():
#     data = request.get_json()
#     amount = data.get('amount')
#     upi_id = data.get('upi_id')
#     # Mock UPI payment process
#     return jsonify({"message": f"Payment of Rs. {amount} to {upi_id} successful."})

@app.route('/send_whatsapp', methods=['POST'])
def send_whatsapp():
    data = request.get_json()
    whatsapp_number = data.get('whatsapp_number')
    order_details = data.get('order_details')
    # Mock WhatsApp messaging process
    return jsonify({"message": f"Order details sent to WhatsApp number {whatsapp_number}: {order_details}"})

if __name__ == '__main__':
    app.run(debug=True)
