from flask import Flask, request, jsonify, send_file
from pdf_to_word import convert_pdf_to_word
from word_to_pdf import convert_word_to_pdf
from flask_cors import CORS

app = Flask(__name)
CORS(app)

@app.route('/pdf-to-word', methods=['POST'])
def pdf_to_word():
    pdf_file = request.files['pdf_file']
    if pdf_file:
        try:
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
            convert_word_to_pdf(word_file)
            # Return a success message or a file download link if needed
            return jsonify({'message': 'Word converted to PDF successfully'})
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'No valid Word file provided'}), 400

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)

