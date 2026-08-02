export default function CreateCampaignPage() {
  return (
    <main className="dashboard">

      <div className="dashboard-card">

        <div className="badge">
          Create Campaign
        </div>

        <h1 className="section-title">
          Launch your idea
        </h1>

        <p className="section-text">
          Share your innovation with supporters around the world.
        </p>


        <form className="campaign-form">

          <input
            placeholder="Campaign title"
          />


          <textarea
            placeholder="Tell your story..."
            rows={6}
          />


          <input
            placeholder="Funding goal ($)"
            type="number"
          />


          <input
            placeholder="Category"
          />


          <button
            className="btn-primary"
            type="button"
          >
            Publish Campaign
          </button>


        </form>


      </div>

    </main>
  );
}
