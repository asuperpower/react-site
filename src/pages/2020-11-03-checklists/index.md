---
path: '/first-post'
date: '2020-11-03'
title: 'The Importance of Checklists in Design Engineering'
tags: ['checklists', 'design', 'engineering', 'software', 'firmware']
excerpt: 'In the field of design engineering, there are always new challenges
which involve what are often similar pieces of work. This sort of
work requires a unique design to be done every time...'
---
In the field of design engineering, there are always new challenges
which involve what are often similar pieces of work. This sort of
work requires a unique design to be done every time — for example, we
can't reuse the same high-level protocol to communicate between two
sets of software that have completely different requirements.  

To complicate matters, it is often the case where these need to be
designed carefully, and any mistake made could cause a lot of time
lost or structural problems down the road. 

Checklists curb this issue by providing a standard roadmap of work
as well as preventing common problems that can arise during the
process of design. Importantly, this applies to a wide range of 
design engineering tasks. A checklist can be used for designing
protocols, board design, making database tables and even
implementing a new manufacturing process.

### An example

To work through the protocol idea highlighted earlier, a simple checklist
for designing a protocol is:  
* ☐ Is there a protocol that already fits my needs (Y/N)  
* ☐ Work out format (Binary OR Textual)  
  If binary:  
  * ☐ Select big or little-endian  
  If textual:  
  * ☐ Camel case or snake case?  
  * ☐ Work out a format (JSON/YAML/XML?)  
  * ☐ Work out limits (max string lengths, etc)  
* ☐ Work out security (Is encryption required?)  
* ☐ Decide if there are timing requirements  
  * ☐ Do we need a heartbeat?
* ☐ Decide if it is stateless  
  If there are states:  
  * ☐ Work out states  

These sort of checklists are crucially not set in stone. Sometimes, while
working through them, you will need to reorder what you do. It's also likely
that you'll learn and make improvements so the checklist a year later could
be a lot different from what you started with. It also helps with making 
consistent decisions. Because we already decided that the protocol is to be
either binary or textual up-front, we aren't going to make a hybrid of the 
two when we design it, as we have already decided to use a specific type in
the design. To follow on from this idea, it can help when reviewing others'
work, as you can quickly see any issues in the design.

### Other uses

Another area where checklists are important is board design. In an
environment where it can take weeks to see the results of a new design,
there is a big cost to design flaws. While software (such
as Altium's design rules) may go a long way in checking the validity of the
board, it does not completely discount the benefits of following a [good
design review checklist](https://resources.altium.com/p/pcb-design-review-checklist-gets-you-manufacturing-quickly). 

These checklists can be either personal or done for an organisation — it is
useful in an organisation where multiple engineers may benefit from it.
There is additionally the added benefit of a 'group IQ' where multiple
people can contribute to one checklist.

Checklists are an important tool in a design engineers arsenal and
can simplify similar tasks that have unique constraints. They also prevent
costly mistakes and can be shared to improve the reliability of design in
an organisation. They can also be used in a wide variety of engineering
disciplines, from hardware through to mechanical and software design.
