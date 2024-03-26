// import './App.css';
import "../node_modules/@scottish-government/design-system/dist/css/design-system.css";
import { useState } from 'react';
import DeploymentFormatter from './components/DeploymentFormatter';

function App() {
  const [params, setParams] = useState('');
  const [depFor, setDepFor] = useState('');

  // On clicking submit, calls the DeploymentFormatter function and sets
  // the depFor state with a formatted list of deployment data.
  function handleClick(params) {
    let data = DeploymentFormatter(params);
    setDepFor(data);
  }

  return (
		<>
			<div className="ds_page__middle">
				<div className="ds_wrapper">
					<main
						id="main-content"
						className="ds_layout ds_layout--pl-component"
					>
						<div className="ds_layout__header">
							<header className="ds_page-header">
								<span className="ds_page-header__label  ds_content-label">
									Tools
								</span>
								<h1 className="ds_page-header__title">
									Deployment Formatter
								</h1>

								<dl className="ds_page-header__metadata  ds_metadata">
									<div className="ds_metadata__item">
										<dt className="ds_metadata__key">
											Last updated
										</dt>
										<dd className="ds_metadata__value">
											February 19th, 2024
										</dd>
									</div>
								</dl>
							</header>
						</div>

						<div className="ds_layout__content">
              <p>
                The deployment formatter takes deployment-specific details and returns
                them in all required formats for various stages of the process; for example 
                creating a new branch on Gitlab, and the subsequent commit message.
              </p>
							<p>
								Enter the deployment details as comma-separated
								values in the order shown below.
							</p>
							<div
								className="ds_accordion"
								data-module="ds-accordion"
							>
								<button
									type="button"
									className="ds_link  ds_accordion__open-all  js-open-all"
								>
									Open all{" "}
									<span className="visually-hidden">
										sections
									</span>
								</button>

								<div className="ds_accordion-item">
									<input
										type="checkbox"
										className="visually-hidden  ds_accordion-item__control"
										id="panel-1"
										aria-labelledby="panel-1-heading"
									/>
									<div className="ds_accordion-item__header">
										<h3
											id="panel-1-heading"
											className="ds_accordion-item__title"
										>
											Input Order & Examples
										</h3>
										<span className="ds_accordion-item__indicator"></span>
										<label
											className="ds_accordion-item__label"
											htmlFor="panel-1"
										>
											<span className="visually-hidden">
												Show this section
											</span>
										</label>
									</div>
									<div className="ds_accordion-item__body">
										<p>Ticket Number (e.g. 12345)</p>
										<p>Version Number (e.g. 0.0.0)</p>
										<p>Sprint Number (e.g. 01)</p>
										<p>Build Number (e.g. 1)</p>
										<p>Environment Number (e.g. 00)</p>
										<p>Branch Name (e.g. MainX0_1989)</p>
									</div>
								</div>
							</div>
							<textarea
								className="ds_input ds_input--fixed-20"
								rows="1"
								placeholder="Paste deployment info here for reference!"
							></textarea>
							<div className="input-container">
								<input
									className="ds_input ds_input--fixed-20"
									type="text"
									id="fixed-20"
									name="fixed-20"
									value={params}
									onChange={(e) => setParams(e.target.value)}
									placeholder="10939,4.3.20,100,1,09,MainR3_2024"
								></input>
								<button
									className="ds_button"
									onClick={() => handleClick(params)}
								>
									Submit
								</button>
							</div>
							{depFor && depFor}
						</div>
					</main>
				</div>
			</div>
		</>
  );
}

export default App;
