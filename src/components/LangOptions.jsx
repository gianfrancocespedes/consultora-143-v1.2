import { Button, Dialog, DialogPanel, Select, SelectItem } from '@tremor/react';
import { useState } from 'react';

export function LangOptions ( { currentLocale } ) {
	const [isOpen, setIsOpen] = useState(false);
	const [value, setValue] = useState(currentLocale);

	const CheckIcon = () => (
		<svg
			class="w-5 h-5 mr-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#146eab] dark:group-hover:text-white"
			xmlns="http://www.w3.org/2000/svg" 
			viewBox="0 0 24 24" 
			fill="rgba(100,205,138,1)">
			<path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
		</svg>
	);

	return (
		<>
			<div class="col-span-6 sm:col-span-3" onClick={() => setIsOpen(true)}>
				<button id="changeLang" class="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
					<svg 
					class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#146eab] dark:group-hover:text-white"
						xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
						<path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
						<path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
					</svg>
					<span class="flex-1 ml-3 text-left rtl:text-right whitespace-nowrap">
						Idioma
					</span>
				</button>
			</div>
			{/* <Button className="mx-auto block" onClick={() => setIsOpen(true)}>Open Dialog</Button> */}
			<Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true} initialFocus={null}>
				<DialogPanel>
					<h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
						Seleccione un idioma
					</h3>
					{/* <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
						Your account has been created successfully. You can now login to your
						account. For more information, please contact us.
					</p> */}
					<div className="mx-auto max-w-xs mt-6">
						{/* <label htmlFor="distance" className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
							Select distance
						</label> */}
						<Select id="distance" name="distance" value={value} onValueChange={setValue} className="mt-2">
							<SelectItem value="es" icon={currentLocale == 'es' ? CheckIcon : null}>Español</SelectItem>
							<SelectItem value="en" icon={currentLocale == 'en' ? CheckIcon : null}>Inglés</SelectItem>
						</Select>
					</div>
					<div className="mt-8 flex items-center justify-end space-x-2">
						<Button color='red' className='px-7' size="xs" variant="secondary" onClick={() => setIsOpen(false)}>
							Cerrar
						</Button>
						<Button className='px-7' size="xs" variant="primary">
							Cambiar
						</Button>
					</div>
					{/* <Button className="mt-8 w-full" onClick={() => setIsOpen(false)}>
						Cambiar
					</Button> */}
				</DialogPanel>
			</Dialog>
		</>
	);
}