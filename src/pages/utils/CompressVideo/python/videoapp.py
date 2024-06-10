from flask import Flask, request, send_file, jsonify # type: ignore
from moviepy.editor import VideoFileClip # type: ignore
import os
from werkzeug.utils import secure_filename # type: ignore

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
COMPRESSED_FOLDER = 'compressed'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(COMPRESSED_FOLDER, exist_ok=True)

@app.route('/compress_video', methods=['POST'])
def compress_video():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    filename = secure_filename(file.filename)
    upload_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(upload_path)

    # Compress the video
    compressed_filename = f"compressed_{filename}"
    compressed_path = os.path.join(COMPRESSED_FOLDER, compressed_filename)
    clip = VideoFileClip(upload_path)
    clip.write_videofile(compressed_path, bitrate="500k")

    return send_file(compressed_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
