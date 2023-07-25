from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('html/index.html')

@app.route("/products")
def products():
    return render_template('html/products.html')

@app.route("/product-details")
def details():
    # Get the id query param from the request
    product_id = request.args.get('id')
    return render_template('html/product-details.html', product_id=product_id)

@app.route("/contact")
def contacts():
    return render_template('html/contact copy.html')

@app.route('/cart')
def cart():
    return render_template('html/cart.html')

if __name__ == '__main__':
    app.run(debug=True)