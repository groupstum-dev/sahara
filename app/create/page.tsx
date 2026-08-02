export default function CreateCampaignPage() {
  return (
    <main className="dashboard">
      <div className="dashboard-card">
        <h1>Start a Campaign</h1>

        <p>
          Launch your innovation and raise support from people around the world.
        </p>

        <form className="campaign-form">
          <input type="text" placeholder="Campaign title" />

          <textarea
            placeholder="Describe your project"
            rows={6}
          />

          <input type="number" placeholder="Funding goal (USD)" />

          <input type="text" placeholder="Category" />

          <button className="nav-button" type="submit">
            Create Campaign
          </button>
        </form>
      </div>
    </main>
  );
}
