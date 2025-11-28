# Real-State-Price-Prediction

A web application that predicts house prices in different locations across Bangalore using machine learning.

## 🌐 Live Demo

👉 [(https://real-state-price-prediction-qpimepv5s-aanandis-projects.vercel.app/)](https://real-state-price-prediction-n2mw72ht3-aanandis-projects.vercel.app/)

## Table of Contents

* Overview
* Features
* Tech Stack
* Installation
* Usage
* Model Details
* Dataset
* Screenshots
* Future Improvements
* License

## Overview

This project aims to help users estimate real estate prices in Bangalore based on location and other property features. It leverages machine learning for accurate price prediction and provides a user-friendly web interface for easy interaction.

## Features

* Predicts house prices for various locations in Bangalore.
* Interactive web application for inputting property details.
* Visualization of price trends using plots.
* Smooth and responsive UI.

## Tech Stack

**Programming Languages:** Python, HTML, CSS, JavaScript, JSON
**Frameworks & Libraries:** Flask, Jupyter Notebook, Matplotlib, scikit-learn
**Other Tools:** Web browser interface for app

## Installation

Clone the repository:

```bash
git clone <your-repo-link>
```

Navigate to the project folder:

```bash
cd Real-Estate-Price-Prediction
```

Create a virtual environment (optional but recommended):

```bash
python -m venv venv
source venv/bin/activate   # For Linux/Mac
venv\Scripts\activate      # For Windows
```

Install dependencies:

```bash
pip install -r requirements.txt
```

## Usage

### ✅ Online (Recommended)

You can directly use the deployed application here:
👉 [https://real-state-price-prediction-qpimepv5s-aanandis-projects.vercel.app/](https://real-state-price-prediction-qpimepv5s-aanandis-projects.vercel.app/)

### 💻 Local Setup

Start the Flask server:

```bash
python server.py
```

Open your web browser and go to:

```text
http://127.0.0.1:5000
```

Enter property details (location, square footage, number of bedrooms, etc.) and click **Predict** to get the estimated price.

## Model Details

* Preprocessed and cleaned the dataset.
* Performed feature engineering to improve prediction accuracy.
* Used machine learning algorithms from scikit-learn.
* Evaluated model performance with metrics like RMSE and R² score.

## Dataset

* Dataset includes property details and prices from various Bangalore locations.
* Features include location, size, number of bedrooms, and other relevant attributes.
* Data preprocessing and cleaning were performed before training.

## Screenshots

(You can add UI screenshots here)

## Future Improvements

* Add support for more cities.
* Improve model accuracy using deep learning.
* Integrate map-based property selection.
* Add user authentication and saved predictions.

## License

This project is open-source and available under the MIT License.

