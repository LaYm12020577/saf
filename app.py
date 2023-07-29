from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('html/index.html')

@app.route("/products.html")
def products():
    return render_template('html/products.html')

@app.route("/product-details.html")
def details():
    # Get the id query param from the request
    product_id = request.args.get('id')
    return render_template('html/product-details.html', product_id=product_id)

@app.route("/contact.html")
def contacts():
    return render_template('html/contact.html')

@app.route('/cart.html')
def cart():
    return render_template('html/cart.html')

@app.route('/blog-single-sidebar.html')
def blog():
    return render_template('html/blog-single-sidebar.html')

if __name__ == '__main__':
    app.run(debug=True)