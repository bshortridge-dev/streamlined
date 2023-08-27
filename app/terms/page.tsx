/* eslint-disable react/no-unescaped-entities */

import React from "react"
import Link from "next/link"

const Terms = () => {
  return (
    <div className="container my-5 flex max-w-3xl border-spacing-2 flex-col justify-center gap-4 rounded-md border border-solid bg-muted py-10">
      <h1 className="flex justify-center pb-4 text-4xl font-black leading-tight tracking-tighter">
        Website Terms and Conditions of Use
      </h1>
      <hr />

      <h2 className="text-2xl font-semibold leading-tight tracking-tighter">
        1. Terms
      </h2>

      <p className="text-sm text-muted-foreground">
        By accessing this Website, accessible from{" "}
        <Link
          href="https://streamlined.email"
          className="link hover:text-black hover:underline dark:hover:text-white"
        >
          https://streamlined.email
        </Link>
        , you are agreeing to be bound by these Website Terms and Conditions of
        Use and agree that you are responsible for the agreement with any
        applicable local laws. If you disagree with any of these terms, you are
        prohibited from accessing this site. The materials contained in this
        Website are protected by copyright and trade mark law.
      </p>

      <h2 className="text-2xl font-semibold leading-tight tracking-tighter">
        2. Use License
      </h2>

      <p className="text-sm text-muted-foreground">
        Permission is granted to temporarily download one copy of the materials
        on Streamlined's Website for personal, non-commercial transitory viewing
        only. This is the grant of a license, not a transfer of title, and under
        this license you may not:
      </p>

      <ul className="text-sm text-muted-foreground">
        <li className="pl-3">- modify or copy the materials;</li>
        <li className="pl-3">
          - use the materials for any commercial purpose or for any public
          display;
        </li>
        <li className="pl-3">
          - attempt to reverse engineer any software contained on Streamlined's
          Website;
        </li>
        <li className="pl-3">
          - remove any copyright or other proprietary notations from the
          materials; or
        </li>
        <li className="pl-3">
          - transferring the materials to another person or "mirror" the
          materials on any other server.
        </li>
      </ul>

      <p className="text-sm text-muted-foreground">
        This will let Streamlined to terminate upon violations of any of these
        restrictions. Upon termination, your viewing right will also be
        terminated and you should destroy any downloaded materials in your
        possession whether it is printed or electronic format.
      </p>

      <h2 className="text-2xl font-semibold leading-tight tracking-tighter">
        3. Disclaimer
      </h2>

      <p className="text-sm text-muted-foreground">
        All the materials on Streamlined's Website are provided "as is".
        Streamlined makes no warranties, may it be expressed or implied,
        therefore negates all other warranties. Furthermore, Streamlined does
        not make any representations concerning the accuracy or reliability of
        the use of the materials on its Website or otherwise relating to such
        materials or any sites linked to this Website.
      </p>

      <h2 className="text-2xl font-semibold leading-tight tracking-tighter">
        4. Limitations
      </h2>

      <p className="text-sm text-muted-foreground">
        Streamlined or its suppliers will not be hold accountable for any
        damages that will arise with the use or inability to use the materials
        on Streamlined's Website, even if Streamlined or an authorize
        representative of this Website has been notified, orally or written, of
        the possibility of such damage. Some jurisdiction does not allow
        limitations on implied warranties or limitations of liability for
        incidental damages, these limitations may not apply to you.
      </p>

      <h2 className="text-2xl font-semibold leading-tight tracking-tighter">
        5. Revisions and Errata
      </h2>

      <p className="text-sm text-muted-foreground">
        The materials appearing on Streamlined's Website may include technical,
        typographical, or photographic errors. Streamlined will not promise that
        any of the materials in this Website are accurate, complete, or current.
        Streamlined may change the materials contained on its Website at any
        time without notice. Streamlined does not make any commitment to update
        the materials.
      </p>

      <h2 className="text-2xl font-semibold leading-tight tracking-tighter">
        6. Links
      </h2>

      <p className="text-sm text-muted-foreground">
        Streamlined has not reviewed all of the sites linked to its Website and
        is not responsible for the contents of any such linked site. The
        presence of any link does not imply endorsement by Streamlined of the
        site. The use of any linked website is at the user's own risk.
      </p>

      <h2 className="text-2xl font-semibold leading-tight tracking-tighter">
        7. Site Terms of Use Modifications
      </h2>

      <p className="text-sm text-muted-foreground">
        Streamlined may revise these Terms of Use for its Website at any time
        without prior notice. By using this Website, you are agreeing to be
        bound by the current version of these Terms and Conditions of Use.
      </p>

      <h2 className="text-2xl font-semibold leading-tight tracking-tighter">
        8. Your Privacy
      </h2>

      <p className="text-sm text-muted-foreground">
        Please read our{" "}
        <Link
          href="/privacy"
          className="link hover:text-black hover:underline dark:hover:text-white"
        >
          Privacy Policy.
        </Link>
      </p>

      <h2 className="text-2xl font-semibold leading-tight tracking-tighter">
        9. Governing Law
      </h2>

      <p className="text-sm text-muted-foreground">
        Any claim related to Streamlined's Website shall be governed by the laws
        of us without regards to its conflict of law provisions.
      </p>
    </div>
  )
}

export default Terms
