# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. Write SQL to create a new table to store customId with name AgentMetadata
- **Acceptance criteria:** new table has been created with the following columns: `facilityId(FK)`, `agentId(FK)`, `customId(varchar(100))`.
- **Time Estimation:** 2hr.
- **Implementation:** create new SQL with 3 columns above. Add foregin key for facility and agent tables.
2. Create CRUD feature for AgentMetadata
- **Acceptance criteria:** user can update the customId for each agent in each facility.
- **Time Estimation:** 16hr.
- **Implementation:**
- create new service for AgentMetadata to do CRUD functionality.
- create unit test for each CRUD functionality.
- create controller/resolver for each CRUD functionality.
- create UI form to display, create, edit and delete AgentMetadata.
3. Update `getShiftsByFacility` function to include AgentMetadata
- **Acceptance criteria:** the shifts should also return the related AgentMetadata for each Agent.
- **Time Estimation:** 2hr.
- **Implementation:** when retrieving the shifts, create the query to join the AgentMetadata table.
4. Update `generateReport` function to render AgentMetadata
- **Acceptance criteria:** the generated PDF should include the customId for each agent.
- **Time Estimation:** 2hr.
- **Implementation:** update the report template to add new column for customId for each agent.