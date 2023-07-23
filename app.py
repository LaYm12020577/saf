from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('../html/index.html')

@app.route("/products")
def products():
    return render_template('products.html')

@app.route("/product-details.html")
def details():
    # Get the id query param from the request
    product_id = request.args.get('id')
    return render_template('product-details.html', product_id=product_id)

if __name__ == '__main__':
    app.run(debug=True)