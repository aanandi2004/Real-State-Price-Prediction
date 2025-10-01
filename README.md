# Real-State-Price-Prediction


A web application that predicts house prices in different locations across Bangalore using machine learning.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Model Details](#model-details)
- [Dataset](#dataset)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [License](#license)

## Overview
This project aims to help users estimate real estate prices in Bangalore based on location and other property features. It leverages machine learning for accurate price prediction and provides a user-friendly web interface for easy interaction.

## Features
- Predicts house prices for various locations in Bangalore.
- Interactive web application for inputting property details.
- Visualization of price trends using plots.
- Smooth and responsive UI.

## Tech Stack
- **Programming Languages:** Python, HTML, CSS, JavaScript, JSON  
- **Frameworks & Libraries:** Flask, Jupyter Notebook, Matplotlib, scikit-learn  
- **Other Tools:** Web browser interface for app

## Installation
1. Clone the repository:  
   ```bash
   git clone <your-repo-link>
Navigate to the project folder:

bash
Copy code
cd Real-Estate-Price-Prediction
Create a virtual environment (optional but recommended):

bash
Copy code
python -m venv venv
source venv/bin/activate   # For Linux/Mac
venv\Scripts\activate      # For Windows
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Usage
Start the Flask server:

bash
Copy code
python server.py
Open your web browser and go to:

cpp
Copy code
http://127.0.0.1:5000
Enter property details (location, square footage, number of bedrooms, etc.) and click Predict to get the estimated price.

Model Details
Preprocessed and cleaned the dataset.

Performed feature engineering to improve prediction accuracy.

Used machine learning algorithms from scikit-learn.

Evaluated model performance with metrics like RMSE and R² score.

Dataset
Dataset includes property details and prices from various Bangalore locations.

Features include location, size, number of bedrooms, and other relevant attributes.

Data preprocessing and cleaning were performed before training.
