import React from 'react';
import Card from '../../components/Card/Card';
import './Project.css';
import shortTermStockTrendPredictionImage from '../../assets/short-term_stock-trend_prediction_using_meta-learning.png';

const Project = ({ setPage }) => {
  return (
    <div className="project">
      <div className="project-title">
        <h2>Projects</h2>
      </div>


      <div className="card-container">
        <Card
          title="Short-Term Stock-Trend Prediction Using Meta-Learning"
          description={(<p>Although conventional machine learning algorithms have been widely adopted for stock-price predictions in recent years, the massive volume of specific labeled data required are not always available. In contrast, meta-learning technology uses relatively small amounts of training data, called fast learners. Such methods are beneficial under conditions of limited data availability, which often obtain for trend prediction based on time-series data limited by sparse information. In this study, we consider short-term stock price prediction using a meta-learning framework with several convolutional neural networks, including the temporal convolution network, fully convolutional network, and residual neural network. We propose a sliding time horizon to label stocks according to their predicted price trends, referred to as called slope-detection labeling, using prediction labels including "rise plus," "rise," "fall," and "fall plus". The effectiveness of the proposed meta-learning framework was evaluated by application to the S&P500. The experimental results show that the inclusion of the proposed meta-learning framework significantly improved both regular and balanced prediction accuracy and profitability.</p>)}
          image={shortTermStockTrendPredictionImage}
          link="https://ieeexplore.ieee.org/document/9658607"
        />
        <Card
          position="right"
          title="Research on predicting medical risk index using neural network"
          description={(
            <ul>
              <li>
                We aim to explore whether pretraining state-of-the-art models (Swin-Transformer, EfficientDet, Dyhead) using the MS-COCO and ImageNet datasets can lead to improved accuracy in medical imaging, specifically with MRI data from the ARDC challenge dataset.
              </li>
              <li>
                We have observed that medical imaging can still benefit from pretraining on these real-world, colorful images to enhance segmentation capabilities on MRI scans. Furthermore, through an in-depth analysis of convolutional models at the low-level layers, we have come to realize that there is a significant overlap in the features captured by the model from both types of images.
              </li>
            </ul>
          )}
        />
        <Card
          title="Medal Life (Startup)"
          description={(
            <ul>
              <li>
                Led the tech team with a focus on conceptualizing a comprehensive system architecture, spanning full-stack, and database components. Collaborated with other teams to align the system with project requirements
              </li>
              <li>
                Engineered the completion of the Minimum Viable Product (MVP), empowering users to achieve daily objectives, celebrate milestones, and earn commemorative medals through efficient event and medal management
              </li>
            </ul>
          )}
        />
        <Card
          position="right"
          title="Music Plus (Database Course Project)"
          description={(
            <ul>
              <li>
                Developed a music playback system providing users with personalized recommendation playlists and comprehensive ranking charts
              </li>
              <li>
                Designed an algorithm leveraging song tags and a user playback history to craft a recommendation playlist tailored to the user's current preferences
              </li>
            </ul>
          )}
        />
      </div>
    </div>
  );
}


export default Project;
