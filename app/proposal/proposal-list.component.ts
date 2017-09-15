import { Component }	from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'aaron@test.com')
	proposalTwo: Proposal = new Proposal(90, 'Jkl Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'aaron@test.com')
	proposalThree: Proposal = new Proposal(300, 'Mno Company', 'http://google.com', 'Ruby on Rails', 150, 120, 15, 'aaron@test.com')

	proposals: Proposal[] = [
			this.proposalOne, 
			this.proposalTwo, 
			this.proposalThree
	]
}