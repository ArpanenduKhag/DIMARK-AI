from flask import Flask, request, render_template
import csv

app = Flask(__name__)

@app.route('/')
def form():
    return render_template('form.html')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.form.to_dict()
    write_to_csv(data)
    return 'Form submitted successfully!'

def write_to_csv(data):
    with open('form_data.csv', mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(data.values())

if __name__ == '__main__':
    app.run(debug=True)
