# Flask server (app.py)
from flask import Flask, request, jsonify, send_file
from pdf2docx import Converter
from docx2pdf import convert
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/pdf-to-word', methods=['POST'])
def pdf_to_word():
    pdf_file = request.files['pdf_file']
    if pdf_file:
        try:
            # Perform PDF to Word conversion using pdf2docx library
            docx_file = convert_pdf_to_word(pdf_file)
            return send_file(docx_file, as_attachment=True, download_name='converted.docx')
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'No valid PDF file provided'}), 400

@app.route('/word-to-pdf', methods=['POST'])
def word_to_pdf():
    word_file = request.files['word_file']
    if word_file:
        try:
            # Perform Word to PDF conversion using docx2pdf library
            convert(word_file)
            # Optionally, you can return a success message or a download link
            return jsonify({'message': 'Word converted to PDF successfully'})
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'No valid Word file provided'}), 400

def convert_pdf_to_word(pdf_file):
    try:
        # Perform PDF to Word conversion using pdf2docx library
        docx_file = Converter(pdf_file).convert()
        docx_file.seek(0)
        return docx_file
    except Exception as e:
        raise e

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
