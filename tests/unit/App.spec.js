import App from '@/App.vue';
import { mount } from '@vue/test-utils';

describe('App tests', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = mount(App,
		{
			stubs: {
				DynamicHello: '<div />'
			}
		});
	});

	it('should render the component', () =>
	{
		console.log(wrapper.html());
	});
});