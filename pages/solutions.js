import Navbar from "../components/navbar";

export default function Services() {
    const text = [
        "Customer Support Automation OpenAI's language models enable businesses to create AI-powered chatbots that can handle a wide range of customer queries, reducing response times and freeing up human agents for more complex tasks.",
        "Sentiment Analysis OpenAI's models can analyze customer feedback and detect sentiment, helping businesses understand customer emotions and tailor their products and services accordingly.",
        "Demand Forecasting By analyzing historical data and trends, OpenAI can help enterprises predict future demand for products and services, enabling better inventory management and resource allocation.",
        "Personalized Marketing OpenAI can be used to create highly personalized marketing campaigns, boosting customer engagement and improving conversion rates.",
        "HR and Recruitment AI-powered tools can streamline the recruitment process by automating resume screening and candidate shortlisting, reducing time and effort spent on hiring.",
        "Employee Performance Analysis OpenAI models can analyze employee performance data to identify areas of improvement and provide personalized training suggestions.",
        "Product Recommendations - commerce businesses can leverage OpenAI to offer personalized product recommendations to customers, increasing sales and customer satisfaction.",
        "Fraud Detection By analyzing vast amounts of data, OpenAI can help businesses identify and prevent fraudulent transactions in real-time.",
        "Predictive Maintenance OpenAI can predict equipment failures before they occur, enabling businesses to perform maintenance in a timely manner and avoid costly downtime.",
        "Supply Chain Optimization AI-powered tools can optimize supply chain management by identifying inefficiencies, predicting potential disruptions, and suggesting optimal routes.",
        "Document Analysis OpenAI can analyze large volumes of documents, extracting valuable insights and automating manual data entry tasks."
    ]

    return (
      <div class="container p-8 mx-auto xl:px-0 flex flex-wrap">
      <Navbar />
      {text.map((line) => (
        <div key={line.id}>{line}</div>
      ))}
      </div>
    );
}